function Point(X,Y){
	this.x = X;
	this.y = Y;
}
function CreateCanvas(elementId){
	var canvas = new Object();
	canvas.canvas = document.getElementById(elementId);
	canvas.context = canvas.canvas.getContext('2d');
	
	canvas.mouse = new Point(0,0);
	canvas.inside = false;
	canvas.last_mouse = new Point(0,0);
	canvas.delta = new Point(0,0);
	canvas.scale = 1;
	canvas.origin = new Point(0,0);
	canvas.mouse_drag = false;
	
	canvas.auto_ui = true;
	
	//events:
	canvas.onmousemove = function(event){};
	canvas.onmouseup = function(event){};
	canvas.onmousedown = function(event){};
	canvas.onmousewheel = function(event){};
	canvas.onmouseover = function(event){};
	canvas.onmouseout = function(event){};
	canvas.onclick = function(event){};
	
	//canvas func:
	canvas.translate = function (x,y){
		canvas.context.translate(
			x,
			y
		)
		canvas.origin.x += -x;
		canvas.origin.y += -y;
	}
	
	
	canvas.canvas.onclick = function (event){
		canvas.onclick(event);
	}
	canvas.canvas.onmousemove = function (event){
		canvas.last_mouse.x = canvas.mouse.x;
		canvas.last_mouse.y = canvas.mouse.y;
		
		canvas.mouse.x = event.clientX - canvas.canvas.offsetLeft;
		canvas.mouse.y = event.clientY - canvas.canvas.offsetTop;
		
		canvas.delta.x = canvas.mouse.x - canvas.last_mouse.x;
		canvas.delta.y = canvas.mouse.y - canvas.last_mouse.y;
		
		//dragging the canvas
		if(canvas.mouse_drag){
			canvas.context.translate(
				canvas.delta.x / canvas.scale,
				canvas.delta.y / canvas.scale
			)
			canvas.origin.x += -canvas.delta.x / canvas.scale;
			canvas.origin.y += -canvas.delta.y / canvas.scale;
		}
		canvas.onmousemove(event);
	};
	canvas.canvas.onmousedown = function (event){
		if(canvas.auto_ui) canvas.mouse_drag = true;
		canvas.onmousedown(event);
	}
	canvas.canvas.onmouseup = function (event){
		canvas.mouse_drag = false;
		canvas.onmouseup(event);
	}
	canvas.canvas.onmouseout = function (event){
		canvas.inside = false;
		canvas.onmouseout(event);
	}
	canvas.canvas.onmouseover = function (event){
		canvas.inside = true;
		
		canvas.mouse.x = event.clientX - canvas.canvas.offsetLeft;
		canvas.mouse.y = event.clientY - canvas.canvas.offsetTop;
		canvas.last_mouse.x = canvas.mouse.x;
		canvas.last_mouse.y = canvas.mouse.y;
		canvas.delta.x = 0;
		canvas.delta.y = 0;
		
		canvas.onmouseover(event);
	}
	canvas.canvas.onmousewheel = function (event){
		if(canvas.auto_ui){
			var wheel = event.wheelDelta / 120;
			var zoom = 1 + wheel/2;
			
			canvas.context.translate(
				canvas.origin.x,
				canvas.origin.y
			)
			canvas.context.scale(zoom,zoom);
			canvas.context.translate(
				-( canvas.mouse.x / canvas.scale + canvas.origin.x - canvas.mouse.x / ( canvas.scale * zoom ) ),
				-( canvas.mouse.y / canvas.scale + canvas.origin.y - canvas.mouse.y / ( canvas.scale * zoom ) )
			);
			
			canvas.origin.x = ( canvas.mouse.x / canvas.scale + canvas.origin.x - canvas.mouse.x / ( canvas.scale * zoom ) );
			canvas.origin.y = ( canvas.mouse.y / canvas.scale + canvas.origin.y - canvas.mouse.y / ( canvas.scale * zoom ) );
			canvas.scale *= zoom;
		}
		
		canvas.onmousewheel(event);
	}
	
	canvas.canvas.reset_view = function (){
		canvas.mouse = new Point(0,0);
		canvas.inside = false;
		canvas.last_mouse = new Point(0,0);
		canvas.delta = new Point(0,0);
		canvas.scale = 1;
		canvas.origin = new Point(0,0);
		canvas.mouse_drag = false;
		
		canvas.context.setTransform(1,0,0,1,0,0);
	}
	
	canvas.canvas.get_local_coords = function(x,y){
		return new Point(
			x / canvas.scale + canvas.origin.x ,
			y / canvas.scale + canvas.origin.y
		);
		
	}
	canvas.canvas.get_global_coords = function(x,y){
		return new Point(
			( x  - canvas.origin.x ) * canvas.scale,
			( y  - canvas.origin.y ) * canvas.scale
		);
		
	}
	return canvas;
}






        // function draw_linie(){
            // context.save();
            // context.beginPath();
            // context.moveTo(this.x1,this.y1);
            // context.lineTo(this.x2,this.y2);
            // context.strokeStyle = 'black';
            // context.stroke();
            // context.restore();
        // }



        // canvas.onmousedown=start_draw;
        // canvas.onmouseup=stop_draw;
        // canvas.onmouseout=stop_draw;


