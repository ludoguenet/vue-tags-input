import { ref } from "vue";

export default() => {
    const tags = ref<string[]>([
        'JS',
        'PHP',
        'Laravel',
    ]);

    const addTag = (e: KeyboardEvent): void => {
        const input: string = (e.target as HTMLInputElement)
            .value
            .replace(',','');

        if (input.length > 0) {
            tags
                .value
                .push(
                    input,
                );
        }

        (e.target as HTMLInputElement).value = '';
    }

    const removeTag = (e: KeyboardEvent): void => {
        const input: string = (e.target as HTMLInputElement).value;

        if (input.length === 0) {
            tags
                .value
                .pop();
        }
    }

    return {
        tags,
        addTag,
        removeTag,
    }
}