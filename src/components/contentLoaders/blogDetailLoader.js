import React from "react"
import ContentLoader from "react-content-loader"

const BlogDetailLoader = (props) => (
  <ContentLoader 
  speed={2}
  width={950}
  height={1390}
  viewBox="0 0 950 1390"
  backgroundColor="#B9BBB6"
  foregroundColor="#ecebeb"
  {...props}
>
  <rect x="327" y="5" rx="6" ry="6" width="300" height="18" /> 
  <rect x="91" y="180" rx="6" ry="6" width="731" height="385" /> 
  <rect x="252" y="365" rx="0" ry="0" width="1" height="19" /> 
  <rect x="5" y="623" rx="0" ry="0" width="900" height="10" /> 
  <rect x="333" y="116" rx="6" ry="6" width="292" height="14" /> 
  <rect x="2" y="53" rx="6" ry="6" width="920" height="33" /> 
  <rect x="5" y="644" rx="0" ry="0" width="900" height="10" /> 
  <rect x="5" y="662" rx="0" ry="0" width="900" height="10" /> 
  <rect x="5" y="680" rx="0" ry="0" width="900" height="10" /> 
  <rect x="5" y="696" rx="0" ry="0" width="900" height="10" />
</ContentLoader>
)

export default BlogDetailLoader

