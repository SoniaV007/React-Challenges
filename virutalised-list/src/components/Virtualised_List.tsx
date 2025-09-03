import React,{useState, useRef, useEffect} from 'react'

const Virtualised_List = ({listItemHeight, containerHeight,fulllist} : {listItemHeight : number, containerHeight : number ,fulllist : number[]}) => {
    const [scrollTop , setScrollTop] = useState(0);
    const scrollRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if(scrollRef.current){
                console.log("Scrolling");
                setScrollTop(scrollRef.current?.scrollTop);
            }
        }
        const node = scrollRef.current;
        if (node) {
            node.addEventListener("scroll", handleScroll);
        }

        return () => {
            if(node) {
                node.removeEventListener("scroll", handleScroll);
            }
        }

    } , []);

    const startIndex = scrollTop/listItemHeight;
    const itemsInWindow = containerHeight/listItemHeight;
    const endIndex = startIndex+itemsInWindow+2;
    const slicedArray = fulllist.slice(startIndex,endIndex)

    return (
    <div ref={scrollRef} style={{height : containerHeight, width: "500px",overflow: "auto", backgroundColor: "pink", padding:"5px"}}>
        <div style={{backgroundColor: "lightblue", height:fulllist.length * listItemHeight, position :"relative"}}>
        {slicedArray.map((item,index) => 
        <div key={index} 
        style={{height : listItemHeight,width: "100%" , backgroundColor: "black", margin : "0.5px", position :"absolute", 
            transform: "translateY(" + (startIndex + index) * listItemHeight + "px)"}} >
            {item}
            </div>
        )}
        </div>
    </div>
  )
}

export default Virtualised_List