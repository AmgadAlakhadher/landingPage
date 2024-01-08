import { memo } from 'react'
import { FaStar } from "react-icons/fa6";

interface IStars{
  active?: boolean;
  raiting: number;
}
const Stars = ({active,raiting}:IStars) => {
  return (
    <>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <span style={ active ? {color: '#4b8ef1',fontSize: '1rem'}: {fontSize: '1rem',color: '#afafaf'}} >{raiting}</span>
    </>
  )
}

export default memo(Stars);