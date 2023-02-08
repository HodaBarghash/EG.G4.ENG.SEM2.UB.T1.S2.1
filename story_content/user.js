function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5mTPSW4QFua":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbxS4ysjg4pLu6tZ1gkYtsKkBMAR7FwXVQafftfqTCLpO_2x5AOVpwYBZZSxKyACb5wZDQ/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

