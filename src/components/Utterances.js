import React, { useState, useRef, useEffect } from 'react'
const Utterances = React.memo(({ slug }) => {
    const [loaded, setLoaded] = useState(false);
    const utterancesRef = useRef() //ref
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }
        setLoaded(false);

        //https://github.com/utterance/utterances/issues/161
        //https://utteranc.es/?installation_id=10331272&setup_action=install

        if (utterancesRef.current) {
            let script = document.createElement("script");
            script.setAttribute("src", "https://utteranc.es/client.js");
            script.setAttribute("crossorigin", "anonymous");
            script.setAttribute("async", true);
            script.setAttribute("repo", "JiayiLiuCA/blog");
            script.setAttribute("issue-term", "pathname");
            script.setAttribute("theme", "github-light");
            script.setAttribute("label", "comment")
            
            script.onload = () => {
                setLoaded(true)
            }
            utterancesRef.current.appendChild(script);
        }
        

    }, [slug])

    return (
        <section key={slug} className='section' ref={utterancesRef}>
            {loaded && <div  ref={utterancesRef}></div>}
        </section>

    )
})

export default Utterances