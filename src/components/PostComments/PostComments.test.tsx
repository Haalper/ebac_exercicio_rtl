import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComments />);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve permitir a inserção de dois comentários', () => {
        render(<PostComments />);

        // Adiciona o primeiro comentário
        fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Primeiro comentário' } });
        fireEvent.click(screen.getByTestId('comment-submit-button'));

        // Adiciona o segundo comentário
        fireEvent.change(screen.getByTestId('comment-input'), { target: { value: 'Segundo comentário' } });
        fireEvent.click(screen.getByTestId('comment-submit-button'));

        // Verifica se os comentários foram adicionados
        expect(screen.getAllByTestId('comment-item')[0]).toHaveTextContent('Primeiro comentário');
        expect(screen.getAllByTestId('comment-item')[1]).toHaveTextContent('Segundo comentário');
    });
});
