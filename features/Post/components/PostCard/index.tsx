import { Avatar } from "features/Post/components/Avatar"
import { usePost } from "features/Post/hooks/usePost"
import { motion } from "framer-motion"
import { BsTrash } from "react-icons/bs"
import { EditText } from "../EditText"

interface IPostCardProps {
  id: number,
  title: string,
  description: string,
  user: {
    id: number
  }
}

export const PostCard = ({
  id,
  title,
  description,
  user
}: IPostCardProps) => {
  const { updatePost, removePost } = usePost()

  return (
    <motion.div
      className="relative flex flex-col justify-between gap-4 p-4 rounded-sm bg-neutral-200"
      initial={{ opacity: id * 0.1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <span className="absolute font-bold top-2 right-2">#{id}</span>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Avatar seed={`${user.id}`} />
          <span>User {user.id}</span>
        </div>
        <div className="flex flex-col gap-2">
          <EditText
            className="text-xl font-bold"
            text={title}
            updateText={(textUpdated: string) => updatePost({
              id,
              userId: user.id,
              title: textUpdated,
              body: description
            })}
          >
            <h3 className="text-xl font-bold">{title}</h3>
          </EditText>
          <EditText
            className="text-sm"
            text={description}
            updateText={(textUpdated: string) => updatePost({
              id,
              userId: user.id,
              title,
              body: textUpdated
            })}
          >
            <p className="text-sm">{description}</p>
          </EditText>
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={() => removePost(id)}>
          <BsTrash className="text-gray-600 transition-all hover:rotate-12" />
        </button>
      </div>
    </motion.div>
  )
}
