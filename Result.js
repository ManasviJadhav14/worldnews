function Result(props)
{
       return(
       <>
              <h2>{props.title}</h2>
              <h2>Author->{props.author}</h2>
              <a href={props.url}target="_blank">Read More</a>
              <h2>published time{props.publishedAt}</h2>
               <hr/>
               <hr/>
       </>
    );
  }
export default Result;