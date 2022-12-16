type SvgProp = {
   width : number;
   height : number;
   className? : string;
}

const CollapseArrowSvg : React.FC<SvgProp> = ({width, height, className}) =>{
   return <>
      <svg 
         xmlns="http://www.w3.org/2000/svg" 
         width={width} 
         height={height} 
         className = {className}
         viewBox="0 0 18 18">
            <path d="M17.707 5.707l-8 8a1 1 
            0 0 1-1.414 0l-8-8A1 1 0 0 
            1 1 4h16a1 1 0 0 1 .924.617A.97.97 
            0 0 1 18 5a1 1 0 0 1-.293.707z"/>
      </svg>
   </>
}

export default CollapseArrowSvg