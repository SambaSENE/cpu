<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20240228140348 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE production (id INT AUTO_INCREMENT NOT NULL, id_cpu_id INT DEFAULT NULL, nom VARCHAR(50) NOT NULL, description VARCHAR(255) NOT NULL, duree INT NOT NULL, INDEX IDX_D3EDB1E025A6C5F9 (id_cpu_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE production ADD CONSTRAINT FK_D3EDB1E025A6C5F9 FOREIGN KEY (id_cpu_id) REFERENCES microprocesseur (id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE production DROP FOREIGN KEY FK_D3EDB1E025A6C5F9');
        $this->addSql('DROP TABLE production');
    }
}
