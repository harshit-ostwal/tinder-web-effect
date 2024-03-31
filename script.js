var users = [
    {
        profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 4,
        location: "Tamilnadu, India",
        name: "Harshit Jain",
        age: 20,
        interests: [
            {
                icon: `<i class="ri-walk-fill"></i>`,
                interest: "Walking",
            },
            {
                icon: `<i class="ri-restaurant-2-fill"></i>`,
                interest: "Eating",
            },
            {
                icon: `<i class="ri-book-open-fill"></i>`,
                interest: "Studying",
            }
        ],
        bio: "I am a computer science undergraduate. I love coding and reading books.",
        isFriend: null
    },
    {
        profileImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 1,
        location: "Delhi, India",
        name: "Mohit Ostwal",
        age: 18,
        interests: [
            {
                icon: `<i class="ri-hotel-bed-fill"></i>`,
                interest: "Slpeeing",
            },
            {
                icon: `<i class="ri-music-2-fill"></i>`,
                interest: "Music",
            },
            {
                icon: `<i class="ri-flight-takeoff-fill"></i>`,
                interest: "Travelling",
            }
        ],
        bio: "I am a computer science undergraduate. I love coding and reading books.",
        isFriend: null
    },
    {
        profileImage: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cG9ydHJhaXR8ZW58MHx8MHx8fDA%3D",
        displayImage: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0fGVufDB8fDB8fHww",
        pendingMessage: 9,
        location: "USA, California",
        name: "Mokshitha",
        age: 16,
        interests: [
            {
                icon: `<i class="ri-terminal-box-fill"></i>`,
                interest: "Coding",
            },
            {
                icon: `<i class="ri-megaphone-fill"></i>`,
                interest: "Influencer",
            },
            {
                icon: `<i class="ri-quill-pen-fill"></i>`,
                interest: "Writting",
            }
        ],
        bio: "I am a computer science undergraduate. I love coding and reading books.",
        isFriend: null
    }
]

var curr = 2;

function select(element) {
    return document.querySelector(element);
}

(function setInitial() {
    select(".main img").src = users[curr].displayImage;
    select(".back img").src = users[curr + 1]?.displayImage;

    select(".profileImg img").src = users[curr].profileImage;
    select(".badge h5").textContent = users[curr].pendingMessage;
    select(".location h3").textContent = users[curr].location;
    select(".name h1:nth-child(1)").textContent = users[curr].name;
    select(".name h1:nth-child(2)").textContent = ", " + users[curr].age;

    var clutter = "";
    users[curr].interests.forEach(function (interest) {
        clutter += ` <div class="tag flex gap-2 capatilize items-center bg-white/30 px-3 py-1 rounded-full">
        ${interest.icon}
        <h3 class="tracking-tighter text-sm">${interest.interest}</h3>
      </div>`
    })

    select(".tags").innerHTML = clutter;

    curr = 2;
}());