'use server';

import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server';
import { prisma } from './utils/db';
import { redirect } from 'next/navigation';

// TODO: Handle validations instead of "as string"
export const handleSubmission = async (formData: FormData) => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    redirect('/api/auth/register');
  }

  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  const imageUrl = formData.get('imageUrl') as string;
  const data = await prisma.blogPost.create({
    data: {
      title,
      content,
      imageUrl,
      authorId: user?.id as string,
      authorImage: user?.picture as string,
      authorName: user?.given_name as string,
    },
  });

  return redirect('/dashboard');
};
