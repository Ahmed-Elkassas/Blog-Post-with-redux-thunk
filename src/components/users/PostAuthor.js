import { useSelector } from "react-redux";
import { getAllUsers } from "../../redux/reducers/users-slice"


export const PostAuthor = ({userId}) => {

  const users = useSelector(getAllUsers)

  const author = users.find((user) => user.id === userId);

  return (
    <span>by {author ? author.name : 'Unknown author'}</span>
  )
}
