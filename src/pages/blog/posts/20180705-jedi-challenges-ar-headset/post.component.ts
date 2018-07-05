import {Component} from '@angular/core';

@Component({
    selector: 'app-20180705-jedi-challenges-ar-headset',
    styleUrls: ['../post.scss'],
    templateUrl: 'post.component.html'
})
export class Post20180705Component {
    stereoEffectExample: string = 'THREE.StereoEffect = function ( renderer ) {\n' +
        '       var _stereo = new THREE.StereoCamera();\n' +
        '       _stereo.aspect = 0.5;\n' +
        '\n' +
        '       this.setEyeSeparation = function ( eyeSep ) {\n' +
        '           _stereo.eyeSep = eyeSep;\n' +
        '       };\n' +
        '\n' +
        '       this.setSize = function ( width, height ) {\n' +
        '           renderer.setSize( width, height );\n' +
        '       };\n' +
        '\n' +
        '       this.render = function ( scene, camera ) {\n' +
        '           scene.updateMatrixWorld();\n' +
        '\n' +
        '           if ( camera.parent === null ) camera.updateMatrixWorld();\n' +
        '               _stereo.update( camera );\n' +
        '\n' +
        '               var size = renderer.getSize();\n' +
        '\n' +
        '               if ( renderer.autoClear ) renderer.clear();\n' +
        '                   renderer.setScissorTest( true );\n' +
        '\n' +
        '                   renderer.setScissor( 0, 0, size.width / 2, size.height );\n' +
        '                   renderer.setViewport( 0, 0, size.width / 2, size.height );\n' +
        '                   renderer.render( scene, _stereo.cameraL );\n' +
        '\n' +
        '                   renderer.setScissor( size.width / 2, 0, size.width / 2, size.height );\n' +
        '                   renderer.setViewport( size.width / 2, 0, size.width / 2, size.height );\n' +
        '                   renderer.render( scene, _stereo.cameraR );\n' +
        '\n' +
        '                   renderer.setScissorTest( false );\n' +
        '               };\n' +
        '           };\n' +
        '       }\n' +
        '\n' +
        '       AFRAME.registerComponent(\'lenovo-ar\', {\n' +
        '           tock: function() {\n' +
        '               const scene = this.el;\n' +
        '               const effect = new THREE.StereoEffect( scene.renderer );\n' +
        '               effect.render(scene.object3D, scene.camera);\n' +
        '           },\n' +
        '       });\n';

    cameraExample: string = '<a-entity look-controls>\n' +
        '       <a-entity camera rotation="-90 0 0"></a-entity>\n' +
        '    </a-entity>';
}
