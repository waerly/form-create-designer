import uniqueId from '@form-create/utils/lib/unique';
import {localeProps} from '../../utils';

const label = 'Demo组件';
const name = 'demo';

export default {
    menu: 'main',
    icon: 'icon-input',
    label,
    name,
    input: true,
    event: ['change'],
    rule({t}) {
        return {
            type: name,
            field: uniqueId(),
            title: t('com.demo.name') || label,
            info: '',
            $required: false,
            props: {
                placeholder: t('com.demo.props.placeholder') || '请输入内容',
                allowClear: true,
            }
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {
                type: 'switch',
                field: 'disabled',
                title: '是否禁用',
            },
            {
                type: 'input',
                field: 'placeholder',
                title: '占位提示',
            },
            {
                type: 'switch',
                field: 'allowClear',
                title: '允许清空',
            },
        ]);
    }
};
