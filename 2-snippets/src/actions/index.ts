'use server';

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { db } from '@/db';

export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  // Revalidate the snippet page (to dump cached old data)
  revalidatePath(`/snippets/${id}`);

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({ where: { id } });

  // Revalidate the home page (to dump cached old data)
  revalidatePath('/');

  // Redirect to home page
  redirect('/');
}

export async function createSnippet(
  formState: { message: string },
  formData: FormData,
) {
  const title = formData.get('title') as string;
  const code = formData.get('code') as string;

  try {
    if (typeof title !== 'string' || title.length < 3) {
      return {
        message: 'Title must be at least 3 characters long',
      };
    }

    if (typeof code !== 'string' || code.length < 10) {
      return {
        message: 'Code must be at least 10 characters long',
      };
    }
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        message: error.message,
      };
    } else {
      return {
        message: 'Something went wrong',
      };
    }
  }

  // Revalidate the home page (to dump cached old data)
  revalidatePath('/');

  // Redirect to home page
  redirect('/');
}
