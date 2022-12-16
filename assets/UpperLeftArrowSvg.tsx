type SvgProp = {
   width : number;
   height : number;
   className : string;
}

const UpperLeftArrowSvg : React.FC<SvgProp> = ({width, height, className}) =>{
   return <>
      <svg 
         xmlns="http://www.w3.org/2000/svg" 
         width={width} 
         height={height} 
         className={className}
         viewBox="0 0 115.668 115.668">
            <path d="M10.185,5.967h102.499c1.641,0,2.983-1.337,2.983-2.983S114.325,0,112.684,0H0v112.684
               c0,1.647,1.337,2.983,2.983,2.983c1.641,0,2.983-1.337,2.983-2.983V10.185l104.599,104.605c0.591,0.585,1.349,0.871,2.112,0.871
               c0.758,0,1.528-0.292,2.112-0.871c1.164-1.164,1.164-3.055,0-4.219L10.185,5.967z"/>
      </svg>
   </>
}

export default UpperLeftArrowSvg