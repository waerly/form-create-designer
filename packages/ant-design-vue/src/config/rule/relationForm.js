import uniqueId from '@form-create/utils/lib/unique';

const label = '关联嵌入表单';
const name = 'relationForm';

export default {
    menu: 'main',
    icon: 'icon-form',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['object'],
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            $required: false,
            value: {},
            props: {
                relationCode: '',
                relationLabel: '',
                slotName: '',
                emptyText: '暂无关联表单数据',
                bordered: true,
            }
        };
    },
    props() {
        return [
            {
                type: 'switch',
                field: 'disabled',
                title: '是否禁用',
            },
            {
                type: 'input',
                field: 'relationCode',
                title: '关联功能编码',
                info: '绑定当前关联嵌入表单对应的 geFun.funCode',
            },
            {
                type: 'input',
                field: 'relationLabel',
                title: '关联功能名称',
                info: '可选，默认可使用所绑定功能名称',
            },
            {
                type: 'input',
                field: 'slotName',
                title: '插槽名称',
                info: '为空时默认使用当前字段名作为命名 slot',
            },
            {
                type: 'input',
                field: 'emptyText',
                title: '空态文案',
            },
            {
                type: 'switch',
                field: 'bordered',
                title: '显示边框',
            },
        ];
    }
};
