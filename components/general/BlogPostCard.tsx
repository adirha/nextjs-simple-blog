import { BlogPost } from '@/app/types/blogPost';
import Image from 'next/image';
import Link from 'next/link';

interface IBlogPostCardProps {
  post: BlogPost;
}

const BlogPostCard = ({
  post: { id, imageUrl, title, content, authorImage, authorName, createdAt },
}: IBlogPostCardProps) => {
  return (
    <div
      className='group relative overflow-hidden rounded-lg border
     border-gray-200 bg-white shadow-md transition-all hover:shadow-md'
    >
      <Link href={`/post/${id}`} className='block w-full h-full'>
        <div className='relative h-48 w-full overflow-hidden'>
          <Image
            src={imageUrl}
            alt='Post Image'
            fill
            className='object-cover transition-transform duration-300 group-hover:scale-105'
          />
        </div>

        <div className='p-4'>
          <h3 className='mb-2 text-lg font-semibold text-gray-900'>{title}</h3>
          <p className='mb-4 text-sm text-gray-600 line-clamp-2'>{content}</p>

          <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-2'>
              <div className='relative size-8 overflow-hidden rounded-full'>
                <Image
                  src={authorImage}
                  alt='Author Image'
                  fill
                  className='object-cover'
                />
              </div>
              <p className='text-sm font-medium text-gray-700'>{authorName}</p>
            </div>
            <time className='text-xs text-gray-500'>
              {new Intl.DateTimeFormat('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              }).format(createdAt)}
            </time>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BlogPostCard;
