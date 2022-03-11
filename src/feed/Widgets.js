import React from 'react'
import loupe from "./img/loupe.png"
import "../Profile/Profile.css"
import "../Profile/style.css"


/*<div classNameName='recherche'>
<img src={loupe} width="10%" ></img>
<input placeholder='recherche' type="text"></input>
</div>}*/

function Widgets() {
  return (
    <div className='widget'>
      <div className='trending'>
		<div className='trend_search'>
			<img src={loupe} className="material-icons trend_search_icon" ></img>
			<div className="trend_search_font">
				<input type='text' placeholder='Rechercher'/>
			</div>
		</div>

		<div className='trend_main' >
			<div className='trend_main_heading'>
				<div>
					<strong>
						Tendences pour vous
					</strong>
				</div>
				<i className="material-icons">settings</i>
			</div>

			<div className='trend_card_img'>
				<div className="trend_card_gray">Trending Worldwide</div>
          		<div className="trend_card_heading">#Breaking News</div>
          		<div className="trend_card_content">
					<div className='text'>
						<div className='heading'>
							<p>Space</p>
						</div>
						<div className='content'>
							<p>lorem ipsum</p>
						</div>
					</div>
					<div className='trend_img'>
						<img src={loupe}></img>
					</div>
				</div>
				<div className="trend_card_gray">
            		10,094 people are tweeting about this
          		</div>
			</div>
			<div className="trend_card">
          		<div className="trend_card_gray">Trending Worldwide</div>
          		<div className="trend_card_heading">#WorldNews</div>
          		<div className="trend_card_gray">
            		125k Tweets<br />5,094 people are tweeting about this
          		</div>
        	</div>

			<div className="trend_card_img">
          		<div className="trend_card_gray">Trending Worldwide</div>
          		<div className="trend_card_heading">#Breaking News</div>
          		<div className="trend_card_content">
            		<div className="text">
						<div className="heading">Animals</div>
						<div className="content">
							These cats are ready for<br />#internationalcatday
						</div>
            		</div>
					<div className="trend_img">
						<img src={loupe}/>
					</div>
          		</div>
				<div className="trend_card_gray">
					2,757 people are tweeting about this
				</div>
			</div>	
			<div className="trend_card">
			<div className="trend_card_gray">Trending Worldwide</div>
			<div className="trend_card_heading">#GreatestOfAllTime</div>
			<div className="trend_card_gray">
				100k Tweets<br />4,123 people are tweeting about this
			</div>
			</div>
			
		</div>

      </div>
    </div>
  )
}

export default Widgets