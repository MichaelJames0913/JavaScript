import java.applet.*;
import java.awt.Graphics; 

public class javaApplet extends Applet{

	/*
	public void init(){
		
	}

	public void start(){

	}

	
	public void stop(){

	}

	public void destroy(){

	}
	*/ 

	public void paint(Graphics g){
		g.drawString("hello",20,30);
	}

}