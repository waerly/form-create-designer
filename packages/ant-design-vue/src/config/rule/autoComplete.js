import uniqueId from '@form-create/utils/lib/unique';
import {localeProps, makeOptionsRule} from '../../utils/index';

const label = '自动完成';
const name = 'autoComplete';

export default {
    menu: 'main',
    icon: 'icon-data-select',
    label,
    name,
    input: true,
    event: ['change', 'search', 'select', 'blur', 'focus'],
    validate: ['string'],
    rule({t}) {
        return {
            type: name,
            field: uniqueId(),
            title: t('com.autoComplete.name'),
            info: '',
            effect: {
                fetch: ''
            },
            $required: false,
            props: {},
            options: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            makeOptionsRule(t, 'options'),
            {
                type: 'switch',
                field: 'disabled'
            },
            {
                type: 'switch',
                field: 'allowClear'
            },
            {
                type: 'input',
                field: 'placeholder'
            },
            {
                type: 'switch',
                field: 'backfill'
            },
            {
                type: 'switch',
                field: 'defaultActiveFirstOption'
            },
            {
                type: 'switch',
                field: 'bordered',
                value: true,
            },
        ]);
    }
};
