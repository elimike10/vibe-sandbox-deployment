'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Comment } from '@/types';
import { mockComments } from '@/lib/data';

interface CommentsProps {
  videoId: string;
}

interface CommentItemProps {
  comment: Comment;
  isReply?: boolean;
}

function CommentItem({ comment, isReply = false }: CommentItemProps) {
  const [showReplies, setShowReplies] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (disliked) setDisliked(false);
    setLiked(!liked);
  };

  const handleDislike = () => {
    if (liked) setLiked(false);
    setDisliked(!disliked);
  };

  const handleReply = () => {
    if (replyText.trim()) {
      // In a real app, this would post the reply
      console.log('Reply:', replyText);
      setReplyText('');
      setIsReplying(false);
    }
  };

  return (
    <div className={`${isReply ? 'ml-12' : ''}`}>
      <div className="flex space-x-3">
        <img
          src={comment.user.avatar}
          alt={comment.user.name}
          className="w-10 h-10 rounded-full object-cover flex-shrink-0"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ac20c8a-6693-4dcc-a292-cad3a193e586.png';
          }}
        />
        
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <h4 className="font-medium text-sm text-gray-900 dark:text-white">
              {comment.user.name}
            </h4>
            <span className="text-xs text-gray-500 dark:text-gray-400">
              {comment.timestamp}
            </span>
          </div>
          
          <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
            {comment.content}
          </p>
          
          <div className="flex items-center space-x-4">
            {/* Like */}
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 px-2 ${liked ? 'text-blue-600' : ''}`}
              onClick={handleLike}
            >
              <div className="w-4 h-4 mr-1">
                <div className={`w-3 h-2 border-2 ${liked ? 'border-blue-600' : 'border-gray-600 dark:border-gray-400'} border-b-0 rounded-t-sm relative`}>
                  <div className={`absolute -bottom-1 left-0.5 w-2 h-1 ${liked ? 'bg-blue-600' : 'bg-gray-600 dark:bg-gray-400'}`}></div>
                </div>
              </div>
              <span className="text-xs">{comment.likes + (liked ? 1 : 0)}</span>
            </Button>
            
            {/* Dislike */}
            <Button
              variant="ghost"
              size="sm"
              className={`h-8 px-2 ${disliked ? 'text-red-600' : ''}`}
              onClick={handleDislike}
            >
              <div className="w-4 h-4 rotate-180">
                <div className={`w-3 h-2 border-2 ${disliked ? 'border-red-600' : 'border-gray-600 dark:border-gray-400'} border-b-0 rounded-t-sm relative`}>
                  <div className={`absolute -bottom-1 left-0.5 w-2 h-1 ${disliked ? 'bg-red-600' : 'bg-gray-600 dark:bg-gray-400'}`}></div>
                </div>
              </div>
            </Button>
            
            {/* Reply */}
            {!isReply && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs"
                onClick={() => setIsReplying(!isReplying)}
              >
                Reply
              </Button>
            )}
          </div>
          
          {/* Reply Form */}
          {isReplying && (
            <div className="mt-3 space-y-2">
              <Textarea
                placeholder="Add a reply..."
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                className="min-h-[80px] resize-none"
              />
              <div className="flex space-x-2">
                <Button size="sm" onClick={handleReply} disabled={!replyText.trim()}>
                  Reply
                </Button>
                <Button size="sm" variant="ghost" onClick={() => setIsReplying(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          )}
          
          {/* Show Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-3">
              <Button
                variant="ghost"
                size="sm"
                className="text-blue-600 hover:text-blue-700 p-0 h-auto font-medium"
                onClick={() => setShowReplies(!showReplies)}
              >
                <div className="w-4 h-4 mr-2">
                  <div className={`w-2 h-2 border-l-2 border-b-2 border-blue-600 transform ${showReplies ? 'rotate-45' : '-rotate-45'} transition-transform`}></div>
                </div>
                {showReplies ? 'Hide' : 'Show'} {comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}
              </Button>
              
              {showReplies && (
                <div className="mt-3 space-y-4">
                  {comment.replies.map((reply) => (
                    <CommentItem key={reply.id} comment={reply} isReply={true} />
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Comments({ videoId }: CommentsProps) {
  const [newComment, setNewComment] = useState('');
  const [sortBy, setSortBy] = useState('top');

  const handleSubmitComment = () => {
    if (newComment.trim()) {
      // In a real app, this would post the comment
      console.log('New comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="space-y-6">
      {/* Comments Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium text-gray-900 dark:text-white">
          {mockComments.length} Comments
        </h3>
        
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="flex items-center space-x-2">
            <div className="flex flex-col space-y-0.5">
              <div className="flex space-x-0.5">
                <div className="w-1 h-1 bg-gray-600 dark:bg-gray-400"></div>
                <div className="w-3 h-1 bg-gray-600 dark:bg-gray-400"></div>
              </div>
              <div className="flex space-x-0.5">
                <div className="w-2 h-1 bg-gray-600 dark:bg-gray-400"></div>
                <div className="w-2 h-1 bg-gray-600 dark:bg-gray-400"></div>
              </div>
            </div>
            <span className="text-sm">Sort by</span>
          </Button>
        </div>
      </div>
      
      {/* Add Comment */}
      <div className="flex space-x-3">
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-medium text-sm flex-shrink-0">
          U
        </div>
        <div className="flex-1 space-y-3">
          <Textarea
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[80px] resize-none border-0 border-b-2 border-gray-200 dark:border-gray-700 rounded-none focus:border-blue-500 bg-transparent"
          />
          <div className="flex space-x-2">
            <Button size="sm" onClick={handleSubmitComment} disabled={!newComment.trim()}>
              Comment
            </Button>
            <Button size="sm" variant="ghost" onClick={() => setNewComment('')}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Comments List */}
      <div className="space-y-6">
        {mockComments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}