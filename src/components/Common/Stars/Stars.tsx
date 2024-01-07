import { memo } from 'react'
import { FaStar } from "react-icons/fa6";

interface IStars{
  active?: boolean;
}
const Stars = ({active}:IStars) => {
  return (
    <>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <FaStar style={ active ? {color: '#4b8ef1'}: {color: '#afafaf'}}/>
        <span style={ active ? {color: '#4b8ef1',fontSize: '1rem'}: {fontSize: '1rem',color: '#afafaf'}} >4.8</span>
    </>
  )
}

export default memo(Stars);