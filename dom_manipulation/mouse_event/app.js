/********************************
mouse event
*********************************/
const clearBtn = document.querySelector(".clear");
const heading = document.getElementById("task-title");

//mouse Event
clearBtn.addEventListener("click", runEvent);
clearBtn.addEventListener("dbclick", runEvent);
clearBtn.addEventListener("mousedownk", runEvent);
clearBtn.addEventListener("mouseup", runEvent);
clearBtn.addEventListener("mouseenter", runEvent);
clearBtn.addEventListener("mouseleave", runEvent);
clearBtn.addEventListener("mouseover", runEvent);
clearBtn.addEventListener("mouseout", runEvent);
document.body.addEventListener("mousemove", runEvent);

//define runEvent
function runEvent(e) {
	console.log(`Event type:${e.type}`);
	heading.innerHTML = `MouseX:${e.offsetX},MouseY:${e.offsetY}`;
	document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},${e.offsetY})`;
}
