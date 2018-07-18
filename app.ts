import page from "page";

page("/spectate/:id", a => {
	console.log(a);
});

page.start();
