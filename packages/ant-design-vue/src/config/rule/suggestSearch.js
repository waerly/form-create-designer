import uniqueId from '@form-create/utils/lib/unique';
import { localeProps } from '../../utils/index';

const label = '建议搜索';
const name = 'suggestSearch';

export default {
    menu: 'main',
    icon: 'icon-data-select',
    label,
    name,
    input: true,
    event: ['change', 'select', 'blur', 'focus'],
    validate: ['string', 'number', 'array'],
    rule({t}) {
        return {
            type: name,
            field: uniqueId(),
            title: t('com.suggestSearch.name'),
            info: '',
            $required: false,
            props: {
                allowClear: true,
                autoSearchOnFocus: true
            },
            options: []
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
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
                field: 'bordered',
                value: true,
            },
            {
                type: 'select',
                field: 'mode',
                options: [
                    {label: t('com.suggestSearch.modeOpt.default'), value: ''},
                    {label: t('com.suggestSearch.modeOpt.multiple'), value: 'multiple'},
                    {label: t('com.suggestSearch.modeOpt.tags'), value: 'tags'}
                ]
            },
            {
                type: 'switch',
                field: 'autoSearchOnFocus',
                value: true
            },
            {
                type: 'inputNumber',
                field: 'maxCount'
            }
        ]);
    }
};
