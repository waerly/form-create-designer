import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps} from '../../utils';

const label = 'SI富文本2';
const name = 'siRichEditor2';

export default {
    menu: 'main',
    icon: 'icon-editor',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['string'],
    rule({t}) {
        return {
            type: name,
            field: uniqueId(),
            title: t('com.siRichEditor2.name'),
            info: '',
            $required: false,
            props: {
                placeholder: t('com.siRichEditor2.props.placeholder') || '请输入内容',
                height: 320,
                minHeight: 220,
                uploadProvider: 'oneBoot',
                isPrivate: 0,
                name: 'file_data',
                maxImageSize: 10,
                maxVideoSize: 20,
                maxAttachmentSize: 20
            }
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {type: 'switch', field: 'disabled'},
            {type: 'input', field: 'placeholder'},
            {type: 'inputNumber', field: 'height', props: {min: 160}},
            {type: 'inputNumber', field: 'minHeight', props: {min: 120}},
            {
                type: 'select',
                field: 'uploadProvider',
                options: localeOptions(t, [
                    {label: 'oneBoot', value: 'oneBoot'},
                    {label: 'aliyunOss', value: 'aliyunOss'},
                    {label: 'qiniu', value: 'qiniu'},
                    {label: 'custom', value: 'custom'}
                ]),
            },
            {type: 'inputNumber', field: 'isPrivate', props: {min: 0, max: 1}},
            {type: 'input', field: 'action'},
            {type: 'input', field: 'uploadImgAction'},
            {type: 'input', field: 'uploadVideoAction'},
            {type: 'input', field: 'uploadFileAction'},
            {type: 'input', field: 'name'},
            {type: 'inputNumber', field: 'maxImageSize', props: {min: 1}},
            {type: 'inputNumber', field: 'maxVideoSize', props: {min: 1}},
            {type: 'inputNumber', field: 'maxAttachmentSize', props: {min: 1}}
        ]);
    }
};
