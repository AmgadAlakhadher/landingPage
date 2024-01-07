import { CSSProperties, ReactElement, memo } from 'react'

interface IHeaderSection{
    title: ReactElement[] | ReactElement;
    description: ReactElement[] | ReactElement;
    style?: CSSProperties;

}
const HeaderSection = ({title,description,style}:IHeaderSection) => {
    
  return (
    <div className="section__header" style={style}>
        <h3 className="section__header_title capitalize">{title}</h3>
        <div className="section__header__lines">
            <span></span>
            <span></span>
        </div>
        <p className="section__header_desc" style={style && {margin:0, width: '100%'}}>{description}</p>
    </div>
  )
}

export default memo(HeaderSection);