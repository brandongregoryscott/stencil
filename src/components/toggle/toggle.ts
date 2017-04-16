import { Component, h, Ionic, Prop } from '../../index';


@Component({
  tag: 'ion-toggle',
  styleUrls: {
    ios: 'toggle.ios.scss',
    md: 'toggle.md.scss',
    wp: 'toggle.wp.scss'
  }
})
export class Toggle {
  activated: boolean;
  id: string;
  labelId: string;

  @Prop() checked: boolean;
  @Prop() disabled: boolean;

  click() {
    this.checked = !this.checked;
  }

  render() {
    return h(this,
      h('div', Ionic.theme(this, 'toggle', {
        class: {
          'toggle-activated': this.activated,
          'toggle-checked': this.checked,
          'toggle-disabled': this.disabled,
        }
      }),
        [
          h('div.toggle-icon',
            h('div.toggle-inner')
          ),
          h('button.toggle-cover', {
            attrs: {
              'id': this.id,
              'aria-checked': this.checked ? 'true': false,
              'aria-disabled': this.disabled ? 'true': false,
              'aria-labelledby': this.labelId,
              'role': 'checkbox',
              'type': 'button'
            },
            on: {
              click: this.click.bind(this)
            }
          })
        ]
      )
    );
  }

}
