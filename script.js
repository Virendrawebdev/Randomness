var allreels = [
  { isMuted:false,
    video: "video/video6.mp4",
    username: '@Artist6778',
    likeCount: '36252',
    isLiked: false,
    commentCount: "154552",
    isFollowed: true,
    ShareCount: "455",
    caption: "When you order art online versus what arrives 📦😂"
  },
  { isMuted:false,
    video: "video/video1.mp4",
    username:  '@Artist6778',
    likeCount: '1326252',
    isLiked: false,
    commentCount: "151452",
    isFollowed: false,
    ShareCount: "145",
    caption: "My hand said art, my brain said nope 🧠🎨"

  },

  { isMuted:false,
    video: "video/video3.mp4",
    username:  '@Artist6778',
    likeCount: '3683522',
    isLiked: true,
    commentCount: "1545",
    isFollowed: false,
    ShareCount: "345",
    caption: "This drawing took five minutes and zero effort 😅"
  },
  { isMuted:false,
    video: "video/video4.mp4",
    username:  '@Artist6778',
    likeCount: '3592',
    isLiked: false,
    commentCount: "1552",
    isFollowed: true,
    ShareCount: "461",
    caption: "Stick figures are my strongest artistic skill set 🤷‍♀️✏️|Present Moment"
  },
  { isMuted:false,
    video: "video/video5.mp4",
    username: '@Artist6778',
    likeCount: '36352',
    isLiked: false,
    commentCount: "152",
    isFollowed: true,
    ShareCount: "451",
    caption: "Drew this masterpiece during my boring Monday meeting 🖍️|Present Moment"
  },
  { isMuted:false,
    video: "video/video2.mp4",
    username:  '@Artist6778',
    likeCount: '3652',
    isLiked: true,
    commentCount: "452",
    isFollowed: false,
    ShareCount: "35",
    caption: "My art teacher lied about my talent 😂🎨 |Positive vibes only"
  },
];
var allReels = document.querySelector('.all-reels')


function addData() {
  var sum = ''
  allreels.forEach(function (value, idx) {
    sum = sum + `  <div class="reel">
                   <video autoplay loop ${value.isMuted?'muted':''} src="${value.video}"></video>
                    <div class="mute" id=${idx}>
                    ${value.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'} 
                     </div>
                    <div class="bottom">
                        <div class="user">
                            <img src="logovirendra.jpg" alt="">
                           <h4>${value.username}</h4>
                           <button id=${idx}  class="follow">${value.isFollowed ? 'Unfollow' : 'Follow'}</button>
                        </div>
                         <h3>${value.caption}</h3>
                    </div>
                    <div class="right">
                        <div id=${idx} class="like">
                          <h4 class="like-icon" >${value.isLiked ? '<i class="ri-heart-3-fill" id="red"></i>' : '<i class="ri-heart-3-line"></i>'}</i></h4> 
                          <h6>${value.likeCount}</h6> 
                        </div>
                         <div class="comment">
                          <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4> 
                          <h6>${value.commentCount}</h6> 
                        </div>
                         <div class="share">
                          <h4 class="share-icon"><i class="ri-share-forward-line"></i></h4> 
                          <h6>${value.ShareCount}</h6> 
                        </div>
                         <div class="tele">
                          <h4 class="tele-icon"><i class="ri-telegram-2-line"></i></h4> 
                        </div>
                         <div class="menu">
                          <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>  
                        </div>
                    </div>
                </div>`
  })

  allReels.innerHTML = sum
}
addData();

allReels.addEventListener('click', function (dets) {

  if (dets.target.className == 'like') {
    if (!allreels[dets.target.id].isLiked) {
      allreels[dets.target.id].likeCount++
      allreels[dets.target.id].isLiked = true
    } else {
      allreels[dets.target.id].likeCount--
      allreels[dets.target.id].isLiked = false
    }
    addData();
  }
  if (dets.target.className == 'follow') {
    if (!allreels[dets.target.id].isFollowed) {
      allreels[dets.target.id].isFollowed = true
    }else{
      allreels[dets.target.id].isFollowed = false
    }
    addData();
  }
  if (dets.target.className == 'mute') {
    if (!allreels[dets.target.id].isMuted) {
      allreels[dets.target.id].isMuted = true
    }else{
      allreels[dets.target.id].isMuted = false
    }
    addData();
  }
    
  
})
