import Component from '@glimmer/component';
import { tracked } from "@glimmer/tracking";
import { action } from "@ember/object";

export default class TodoAppComponent extends Component {
    @tracked
    text = "";

    @action
    submit(model, event) {
        event.preventDefault();
        const i = model[model.length - 1].id + 1;
        const newTodo = {
            id: i,
            todo: this.text
        }
        model.pushObject(newTodo);
        this.text = "";
        console.log("add", model)
    }

    @action
    delete(model, item) {
        console.log(model, item)
        model = model.filter(m => m.id !== item.id)
        console.log(model)
    }

    @action
    onChange(e) {
        this.text = e.target.value;
    }
}
