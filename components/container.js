export default function Container({ children,  className }) {

  function getClasses(){
    return `px-6 mx-auto ${className}`
  }

  return <div className={ getClasses() }>{children}</div>
}
