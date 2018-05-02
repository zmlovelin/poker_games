<template>
    <div class="cx-checkbox-group">
        <slot></slot>
    </div>
</template>

<script>
    import {findComponentsDownward} from "../core/common";

    export default {
        name: "cx-checkbox-group",
        props: {
            value: {
                type: [String, Number, Boolean, Array],
                default () {
                    return [];
                }
            },
            type: {
                type: String,
                default: 'checkbox'
            }
        },
        data() {
            return {
                currentValue: this.value,
                children: []
            }
        },
        methods: {
            updateModel (label, val) {
                this.children = findComponentsDownward(this, 'cx-checkbox');
                if (this.type === 'checkbox') {
                    if (val) {
                        this.currentValue.push(label);
                    } else {
                        this.currentValue.splice(this.currentValue.findIndex(itm => itm === label), 1);
                    }
                    this.children.forEach(child => {
                        child.currentValue = this.currentValue.includes(child.label);
                    });
                } else {
                    this.children.forEach(child => {
                        child.currentValue = label === child.label;
                    });
                    this.currentValue = [label];
                }
            },
        }
    }
</script>

<style lang="stylus" scoped>
.cx-checkbox-group {
    font-size 0
}
</style>
