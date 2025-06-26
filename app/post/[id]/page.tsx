import { prisma } from '@/app/utils/db';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

const getPost = async (id: string) => {
  const data = await prisma.blogPost.findUnique({ where: { id } });
  if (!data) {
    return notFound();
  }
  return data;
};

interface IPostPageParams {
  params: Promise<{ id: string }>;
}

const PostPage = async ({ params }: IPostPageParams) => {
  const { id: postId } = await params;
  const postData = await getPost(postId);
  return (
    <div className='max-w-3xl mx-auto py-8 px-4'>
      <Link href='/' className={buttonVariants({ variant: 'secondary' })}>
        Back to posts
      </Link>

      <div className='mb-8 mt-6'>
        <h1 className='text-3xl font-bold tracking-tight mb-4'>
          {postData.title}
        </h1>
        <div className='flex items-center space-x-4'>
          <div className='flex items-center space-x-2'>
            <div className='relative size-10 overflow-hidden rounded-full'>
              <Image
                src={postData.authorImage}
                alt={postData.authorName}
                fill
                className='object-cover'
              />
            </div>
            <p className='font-medium'>{postData.authorName}</p>
          </div>
          <p className='text-sm text-gray-500'>
            {new Intl.DateTimeFormat('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            }).format(postData.createdAt)}
          </p>
        </div>
      </div>

      <div className='relative h-[400px] w-full mb-8 overflow-hidden rounded-lg'>
        <Image
          src={postData.imageUrl}
          alt={postData.title}
          fill
          priority
          className='object-cover'
        />
      </div>

      <Card>
        <CardContent>
          <p className='text-gray-700'>{postData.content}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostPage;
