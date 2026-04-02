import uniqueId from '@form-create/utils/lib/unique';

const label = '关联功能';
const name = 'relation';

export default {
    menu: 'main',
    icon: 'icon-table',
    label,
    name,
    input: true,
    event: ['change'],
    validate: ['array'],
    rule() {
        return {
            type: name,
            field: uniqueId(),
            title: label,
            info: '',
            $required: false,
            props: {
                relationCode: '',
                relationLabel: '',
                slotName: '',
                rowKey: 'id',
                addText: '新增一行',
                emptyText: '暂无关联数据',
                showToolbar: true,
                bordered: true,
                min: 0,
                max: 0,
                columns: [
                    {title: '名称', dataIndex: 'name', valueType: 'text'},
                    {title: '数量', dataIndex: 'amount', valueType: 'number'},
                ],
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
                info: '绑定当前 relation 组件对应的 geFun.funCode',
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
                field: 'rowKey',
                title: '行主键字段',
            },
            {
                type: 'input',
                field: 'addText',
                title: '新增按钮文案',
            },
            {
                type: 'input',
                field: 'emptyText',
                title: '空态文案',
            },
            {
                type: 'switch',
                field: 'showToolbar',
                title: '显示工具栏',
            },
            {
                type: 'switch',
                field: 'bordered',
                title: '显示边框',
            },
            {
                type: 'inputNumber',
                field: 'min',
                title: '最小行数',
                props: {min: 0},
            },
            {
                type: 'inputNumber',
                field: 'max',
                title: '最大行数',
                props: {min: 0},
            },
            {
                type: 'TableOptions',
                field: 'columns',
                title: '列配置',
                props: {
                    column: [
                        {label: '标题', key: 'title'},
                        {label: '字段名', key: 'dataIndex'},
                        {label: '值类型', key: 'valueType'},
                    ]
                }
            },
        ];
    }
};
