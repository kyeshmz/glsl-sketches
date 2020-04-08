#define MAIN_COLOR vec3(1.0, 1.0, 1.0)

uniform vec2 speed;
uniform vec2 graininess;

const int complexity = 30;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
     //  800*450/800
    //0 = p as 450
    // makes the space 0 to 2
    // if the fragcoordinate is 0
    // 0 - 400*400/ max(400)
    // p = -2

    // if the frag coordinate is 400
    // 2 * 400*400 - 400*400 / 400
    // 400*400 / 400
    // 400

    // p makes the coordinates from 0 to iResolution.x
	vec2 p=(2.0*fragCoord.xy-iResolution.xy)/max(iResolution.x,iResolution.y);
	for(int i=1;i<complexity;i++)
	{
		vec2 newp=p;
      vec2 speed = vec2(2.3);
      vec2 smoothness = vec2(0.6);
		newp.x+=smoothness.x/float(i)*sin(float(i)*p.y+iTime+speed.x*float(i))+1.0;
		newp.y+=smoothness.y/float(i)*sin(float(i)*p.x+iTime+speed.x*float(i+10))-1.4;
		p=newp;
	}
	//vec3 col=vec3(1.0 - 2.0*abs(sin(p.x)), 1.0 - abs(sin(p.x+p.y)), 1.0 - abs(sin(p.y)))
        			// * MAIN_COLOR;
   vec3 col=vec3(1.0 - 2.0*abs(sin(p.x)), 1.0 - abs(sin(p.x+p.y)), 1.0 - abs(sin(p.y)))* MAIN_COLOR;
	fragColor=vec4(col, 1.0);
}