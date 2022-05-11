import { Link,useResolvedPath,useMatch } from "react-router-dom";


function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });


    const styleNave = {
      color:match ? 'white':'#4b5563',
      backgroundColor: match ? '#ef4444' : "white",
      borderRadius: 30,
      textDecoration: 'none',
      paddingLeft: 14,
      paddingRight: 14,
      paddingBottom: 5,
      paddingTop: 5,
      marginLeft: 15,
      border: match ? '3px solid #ef4444' : ''
    }
  
    return (
      <div>
        <Link
          style={styleNave}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }



  export default CustomLink