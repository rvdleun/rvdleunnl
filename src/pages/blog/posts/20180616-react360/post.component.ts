import {Component} from '@angular/core';

@Component({
    selector: 'app-20180616-react360',
    styleUrls: ['../post.scss'],
    templateUrl: 'post.component.html'
})
export class Post20180616Component {
    reactVrExample: string = 'export default class reactvr_app extends React.Component {\n' +
        '        render() {\n' +
        '            return (\n' +
        '                <View>\n' +
        '                   <Pano source={asset(\'chess-world.jpg\')}/>\n' +
        '                   <Text\n' +
        '                       style={{\n' +
        '                       backgroundColor: \'#777879\',\n' +
        '                       fontSize: 0.8,\n' +
        '                       fontWeight: \'400\',\n' +
        '                       layoutOrigin: [0.5, 0.5],\n' +
        '                       paddingLeft: 0.2,\n' +
        '                       paddingRight: 0.2,\n' +
        '                       textAlign: \'center\',\n' +
        '                       textAlignVertical: \'center\',\n' +
        '                       transform: [{translate: [0, 0, -3]}],\n' +
        '                   }}>\n' +
        '                       hello\n' +
        '                </Text>\n' +
        '            </View>\n' +
    '            );\n' +
        '    }\n' +
        '};';

    react360ClientExample: string = 'const r360 = new ReactInstance(bundle, parent, {\n' +
        '        fullScreen: true,\n' +
        '        ...options,\n' +
        '    });\n' +
        '\n' +
        '    const surface = new Surface(1024, 100, \'Flat\');\n' +
        '    surface.setAngle(0, -Math.PI / 8);\n' +
        '\n' +
        '    r360.renderToSurface(\n' +
        '        r360.createRoot(\'background_demo\',\n' +
        '        surface,\n' +
        '    );\n';

    react360IndexCodeExample: string = 'export default class background_demo extends React.Component {\n' +
        '        backgrounds = [\'1.png\', \'2.png\', \'3.png\', \'4.png\', \'5.png\'];\n' +
        '        currentBackground = 0;\n' +
        '\n' +
        '        changeBackground(change) {\n' +
        '            this.currentBackground+=change;\n' +
        '\n' +
        '            if(this.currentBackground < 0) {\n' +
        '                this.currentBackground = this.backgrounds.length - 1;\n' +
        '            } else if(this.currentBackground >= this.backgrounds.length) {\n' +
        '                this.currentBackground = 0;\n' +
        '            }\n' +
        '    \n' +
        '            Environment.setBackgroundImage(\n' +
        '                asset(this.backgrounds[this.currentBackground]),\n' +
        '            );\n' +
        '        }\n' +
        '\n' +
        '        componentDidMount() {\n' +
        '            this.changeBackground(0);\n' +
        '        }\n' +
        '\n' +
        '        render() {\n' +
        '            return (\n' +
        '                <View>\n' +
        '                    <View style={styles.panel}>\n' +
        '                        <VrButton onClick={() => this.changeBackground(-1)} style={[styles.button, styles.buttonLeft]}>\n' +
        '                            <Text style={styles.buttonText}>Prev</Text>\n' +
        '                        </VrButton>\n' +
        '\n' +
        '                        <VrButton onClick={() => this.changeBackground(1)} style={[styles.button, styles.buttonRight]}>\n' +
        '                            <Text style={styles.buttonText}>Next</Text>\n' +
        '                        </VrButton>\n' +
        '                    </View>\n' +
        '                </View>\n' +
        '            );\n' +
        '        }\n' +
        '    };';

    react360IndexStyleExample: string = 'const styles = StyleSheet.create({\n' +
        '        panel: {\n' +
        '            width: 1024,\n' +
        '            height: 100,\n' +
        '            backgroundColor: \'rgba(256, 256, 256, .5)\',\n' +
        '        },\n' +
        '        \n' +
        '        button: {\n' +
        '            position: \'absolute\',\n' +
        '            padding: 20,\n' +
        '            backgroundColor: \'#000000\',\n' +
        '            borderColor: \'#639dda\',\n' +
        '            borderWidth: 2,\n' +
        '            alignItems: \'center\',\n' +
        '            width: 256\n' +
        '        },\n\n' +
        '        buttonLeft: {\n' +
        '            left: 5,\n' +
        '        },\n\n' +
        '        buttonRight: {\n' +
        '            right: 5,\n' +
        '        },\n\n' +
        '        buttonText: {\n' +
        '            fontSize: 30,\n' +
        '        },\n' +
        '    }' +
        ');\n';
}
