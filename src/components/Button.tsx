import React from 'react'
import classNames from 'classnames'


type ButtonType = {
    className: string
    children: any
   
}
export const Button = (props: ButtonType) => {
    return <> 
    
<button className={classNames('button',props.className ,{
    'button--outline': ''
})}>{props.children}</button>
    </>
}