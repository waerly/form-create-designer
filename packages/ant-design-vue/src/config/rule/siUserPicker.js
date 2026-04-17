import uniqueId from '@form-create/utils/lib/unique';
import {localeOptions, localeProps} from '../../utils';

const label = 'SI用户选择';
const name = 'siUserPicker';

export default {
    menu: 'main',
    icon: 'icon-select',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['string', 'array', 'number'],
    rule({t}) {
        return {
            type: name,
            field: uniqueId(),
            title: t('com.siUserPicker.name'),
            info: '',
            $required: false,
            props: {
                placeholder: '请选择用户',
                multiple: false,
                allowClear: true,
                labelField: 'username',
                valueField: 'id',
                pageSize: 20
            }
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {type: 'switch', field: 'disabled'},
            {type: 'input', field: 'placeholder'},
            {type: 'switch', field: 'multiple'},
            {type: 'switch', field: 'allowClear'},
            {type: 'input', field: 'labelField'},
            {type: 'input', field: 'valueField'},
            {type: 'inputNumber', field: 'pageSize', props: {min: 1, max: 100}},
            {
                type: 'select',
                field: 'maxTagCount',
                options: localeOptions(t, [
                    {label: 'responsive', value: 'responsive'},
                    {label: '1', value: 1},
                    {label: '2', value: 2},
                    {label: '3', value: 3}
                ])
            }
        ]);
    }
};
