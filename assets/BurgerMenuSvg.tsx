type SvgProp = {
   width : number;
   height : number;
}

const BurgerMenuSvg : React.FC<SvgProp> = ({width, height}) =>{
   return <>
      <svg 
         xmlns="http://www.w3.org/2000/svg" 
         width={width} 
         height={height} 
         viewBox="0 0 50 50">
            <g>
               <rect y="3" width="50" height="2"/>
               <rect y="17" width="50" height="2"/>
               <rect y="31" width="50" height="2"/>
               <rect y="45" width="50" height="2"/>
            </g>
      </svg>
   </>
}

export default BurgerMenuSvg