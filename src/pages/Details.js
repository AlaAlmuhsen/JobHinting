import { useParams } from "react-router-dom"
import useFetch from "../customhooks/useFetch"
function Details() {
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);
    const { id }=useParams();
  return (
    <div>
      <p>{blog.id}</p>
    </div>
  )
}

export default Details
