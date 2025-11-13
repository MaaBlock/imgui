#version 450 core
layout(location = 0) out vec4 fColor;
layout(set=0, binding=0) uniform sampler2D sTexture;
layout(location = 0) in struct { vec4 Color; vec2 UV; } In;

void main()
{
    vec3 linear_color_rgb = pow(In.Color.rgb, vec3(2.2));
    vec4 linear_color = vec4(linear_color_rgb, In.Color.a);

    vec4 tex_color = texture(sTexture, In.UV.st);

    fColor = linear_color * tex_color;
}
