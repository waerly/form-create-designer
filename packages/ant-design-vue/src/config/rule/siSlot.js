import {localeProps} from '../../utils';

const label = 'SI插槽';
const name = 'fcSiSlot';

export default {
    menu: 'aide',
    icon: 'icon-html',
    label,
    name,
    event: [],
    rule() {
        return {
            type: 'siSlot',
            props: {
                name: 'block_default',
            },
        };
    },
    props(_, {t}) {
        return localeProps(t, name + '.props', [
            {
                type: 'input',
                field: 'name',
                title: '插槽名称',
                info: '对应 <template #xxx> 中的 xxx，默认 block_default',
            },
        ]);
    },
};
