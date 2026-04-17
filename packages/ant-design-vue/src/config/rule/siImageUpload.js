import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps} from '../../utils';

const label = 'SI图片上传';
const name = 'siImageUpload';

export default {
    menu: 'main',
    icon: 'icon-image',
    label,
    name,
    input: true,
    event: ['change', 'remove', 'preview'],
    validate: ['array'],
    rule({t}) {
        return {
            type: name,
            field: uniqueId(),
            title: t('com.siImageUpload.name'),
            info: '',
            $required: false,
            props: {
                uploadProvider: 'oneBoot',
                isPrivate: 0,
                action: '',
                name: 'file_data',
                previewSize: 'small',
                valueType: 'url',
                uploadText: t('com.siImageUpload.props.uploadText') || '上传图片'
            }
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {type: 'switch', field: 'disabled'},
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
            {
                type: 'select',
                field: 'valueType',
                options: localeOptions(t, [
                    {label: 'url', value: 'url'},
                    {label: 'object', value: 'object'}
                ]),
            },
            {
                type: 'select',
                field: 'previewSize',
                options: localeOptions(t, [
                    {label: 'small', value: 'small'},
                    {label: 'medium', value: 'medium'},
                    {label: 'large', value: 'large'}
                ]),
            },
            {type: 'inputNumber', field: 'isPrivate', props: {min: 0, max: 1}},
            {type: 'input', field: 'action'},
            {type: 'input', field: 'name'},
            {type: 'input', field: 'deleteAction'},
            {type: 'inputNumber', field: 'limit', props: {min: 0}},
            {type: 'inputNumber', field: 'maxSize', props: {min: 0}},
            {type: 'input', field: 'uploadText'},
            {type: 'input', field: 'uploadTip'}
        ]);
    }
};
