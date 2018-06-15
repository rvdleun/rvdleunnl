import {Component} from '@angular/core';

@Component({
    selector: 'app-20180605-react360',
    styleUrls: ['../post.scss'],
    templateUrl: 'post.component.html'
})
export class Post20180605Component {
    reactVrExample: string = 'export default class reactvr_app extends React.Component {\n' +
        '    render() {\n' +
        '        return (\n' +
        '            <View>\n' +
        '                <Pano source={asset(\'chess-world.jpg\')}/>\n' +
        '                <Text\n' +
        '                    style={{\n' +
        '                    backgroundColor: \'#777879\',\n' +
        '                    fontSize: 0.8,\n' +
        '                    fontWeight: \'400\',\n' +
        '                    layoutOrigin: [0.5, 0.5],\n' +
        '                    paddingLeft: 0.2,\n' +
        '                    paddingRight: 0.2,\n' +
        '                    textAlign: \'center\',\n' +
        '                    textAlignVertical: \'center\',\n' +
        '                    transform: [{translate: [0, 0, -3]}],\n' +
        '                }}>\n' +
        '                    hello\n' +
        '                </Text>\n' +
        '            </View>\n' +
        '        );\n' +
        '    }\n' +
        '};';
}
