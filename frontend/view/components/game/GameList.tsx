import Game from '../../../src/Domain/Game/Game.ts'
import { Link } from 'react-router-dom'

import { useI18n } from '../../hooks'
import { AlertPrimary } from '../general'

import styles from './game-list/index.module.css'

export function GameList ({ games }: { games: Game[] }) {
  const $t = useI18n('components.game.list')
  return (
    <>
      <h6>{$t('title')}</h6>
      {
        games.length > 0 ?
          <div className={styles.GameList}>
            {games.map((game: Game) => (
              <AlertPrimary key={game.id}>
                <Link to={`/games/${game.id}/play`}>
                  {game.description}
                </Link>
              </AlertPrimary>
            ))}
          </div> :
          <small className="fw-lighter">{$t('empty')}</small>
      }
    </>
  )
}
