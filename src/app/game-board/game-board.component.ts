import { Component } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent {
  board = [['', '', ''], ['', '', ''], ['', '', '']];
  player = 'X';

  makeMove(row: number, col: number) {
    if (this.board[row][col] === '') {
      this.board[row][col] = this.player;
      if (this.checkWin(this.player)) {
        alert(this.player + ' победи!');
        this.resetBoard();
      }
      this.player = this.player === 'X' ? 'O' : 'X';
    }
  }
  checkWin(player: string): boolean {
    for (let row = 0; row < 3; row++) {
      if (this.board[row][0] === player && this.board[row][1] === player && this.board[row][2] === player) {
        return true;
      }
    }

    for (let col = 0; col < 3; col++) {
      if (this.board[0][col] === player && this.board[1][col] === player && this.board[2][col] === player) {
        return true;
      }
    }

    if (this.board[0][0] === player && this.board[1][1] === player && this.board[2][2] === player) {
      return true;
    }

    if (this.board[0][2] === player && this.board[1][1] === player && this.board[2][0] === player) {
      return true;
    }

    return false;
  }
  resetBoard() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
  }
}
